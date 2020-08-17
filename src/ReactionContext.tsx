import React, { createContext, useState } from 'react';
import WebSocketService from './WebsocketService';

interface Props {
  children: any;
}

interface ReactionContextInterface {
  reactions: number;
  like: () => Promise<void>;
}

const emptyContext: ReactionContextInterface = {
  reactions: 0,
  like: async () => {
    /* no op */
  }
};


const URL = 'ws://localhost:9001';
const ws = new WebSocketService(URL);
export const ReactionContext = createContext(emptyContext);

export const ReactionProvider = ({ children }: Props) => {
  const [reactions, updateReactions] = useState(0);
  const initialValue = {
    reactions,
    like: ws.like.bind(ws),
  }

  const onMessage = (msg: any) => {
    const data = JSON.parse(msg.data);
    console.log(data);
    if(data.action === 'reactionCreated') {
      console.log(`Message: ${data.payload.reactions.likes}`)
      updateReactions(data.payload.reactions.likes);
    }
  };

  ws.initialize(onMessage);

  return(
    <ReactionContext.Provider value={initialValue}>
      { children }
    </ReactionContext.Provider>
  );
}

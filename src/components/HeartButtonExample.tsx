import React, { useEffect } from 'react';
import Heart from '../icons/Heart';

export interface HeartButtonProps {
  style?: React.CSSProperties;
}

const heartActivationTime = 300;

const HeartButton: React.FC<HeartButtonProps> = ({ style }) => {
  /*
  const clickHeart = () => {
    this.heartClickStamp = Date.now();
    this.activeHeart = true;
    setTimeout(() => {
      if (Date.now() - this.heartClickStamp > heartActivationTime) {
        this.activeHeart = false;
      }
    }, heartActivationTime + 50);
    this.moveHeart();
  }
  */

  /*
  const moveHeart = async () => {
    const hearts = document.getElementsByClassName('moving-heart');
    const permutation = this.generatePermutaion(hearts.length);
    window['__hearts'] = hearts;
    let heart: HTMLElement;
    for (let i = 0; i < hearts.length; i ++) {
      const targetHeart: HTMLElement = hearts.item(permutation[i]) as HTMLElement;
      if (!targetHeart['occupied']) {
        targetHeart['occupied'] = true;
        heart = targetHeart;
        break;
      }
    }
    if (heart) {
      heart.style.display = 'block';
      const initBottom = 20;
      const range = 10 + Math.random() * 10;
      let rightDiff = Math.random() > 0.5 ? -1 * range : range;
      const interval = setInterval(() => {
        heart.style.right = 13 + rightDiff + 'px';
        rightDiff *= -1;
      }, 800);
      await this.sleep(30);
      heart.style.bottom = initBottom + 70 + 'px';
      heart.style.opacity = '1';
      heart.style.right = 13 + rightDiff + 'px';
      rightDiff *= -1;
      await this.sleep(700);
      heart.style.bottom = initBottom + 140 + 'px';
      await this.sleep(700);
      heart.style.bottom = initBottom + 210 + 'px';
      heart.style.opacity = '0';
      await this.sleep(700);
      heart.style.display = 'none';
      heart.style.bottom = initBottom + 'px';
      heart.style.right = '13px';
      heart.style.opacity = '0';
      clearInterval(interval);
      heart['occupied'] = false; 
    }
  }
  */

  useEffect(() => {});

  return (
    /*
    <div className="heart" onClick="clickHeart();">
      <heart-fill-svg className="heart-icon" 
        [fill]="'#FFFFFF'" 
        [width]="22"></heart-fill-svg>
      <heart-fill-svg 
        *ngFor="let idx of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]"
        class="moving-heart" 
        [fill]="idx % 2 ? '#FF00C7' : '#FF4F8E'" 
        [width]="24 - (idx % 3) * 2"
        style={display: none}
        (click)="$event.stopPropagation();"
        ></heart-fill-svg>
      <div className="heart-number">{298}</div>
    </div>
    */
    <Heart />
  );
};

export default HeartButton;

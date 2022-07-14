import {FC} from 'react';
import './Dot.css';
import {BOX_SIZE} from '../config';

type Props = {
  x:number,
  y:number,
}

export const Dot:FC<Props> = ({x,y})=>(
  <div className="dot" style={{left: `${BOX_SIZE* x}px`, top: `${BOX_SIZE* y}px`}}>
    <div className="label">{x},{y}</div>
  </div>

)

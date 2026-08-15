import {useDroppable} from '@dnd-kit/react';
import { PropsWithChildren } from 'react';

type Props=PropsWithChildren<{
    id: any
}>
export default function Droppable({id, children}: Props) {
  const {ref} = useDroppable({
    id,
  });

  return (
    <div ref={ref} style={{width: 300, height: 300}}>
      {children}
    </div>
  );
}
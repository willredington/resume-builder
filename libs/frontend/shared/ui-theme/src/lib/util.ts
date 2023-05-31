import { Colors } from './color';

export function makeNeonTextShadow(primaryColor: string) {
  return `0 0 7px ${Colors.White}, 0 0 10px ${Colors.White}, 0 0 42px ${primaryColor}, 0 0 82px ${primaryColor}, 0 0 92px ${primaryColor}, 0 0 102px ${primaryColor}, 0 0 151px ${primaryColor}`;
}

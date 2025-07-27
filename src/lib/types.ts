export interface Step {
  title: string;
  description: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  points: number;
  rewardTitle: string;
  type: 'checkbox' | 'interactive';
  steps?: Step[];
}

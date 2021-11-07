export interface BaseEntity {
  id: number | null;
}

export interface Widget extends BaseEntity {
  title: string;
  description: string;
}

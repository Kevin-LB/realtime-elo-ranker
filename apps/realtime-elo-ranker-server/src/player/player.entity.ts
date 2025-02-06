import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Player {
  @PrimaryColumn()
  id: string;

  @Column({ default: 0 })
  wins: number;

  @Column({ default: 0 })
  losses: number;

  @Column({ default: 1000 })
  rank: number;
}

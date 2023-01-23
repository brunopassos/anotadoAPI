import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { User } from "./user.entity";

@Entity("notes")
export class Note{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({nullable: true})
    title: string;

    @Column()
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, {eager: true})
    @JoinColumn()
    user: User;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
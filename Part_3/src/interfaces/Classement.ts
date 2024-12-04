import {ApiResource} from "@/interfaces/ApiResource";

export interface Classement extends ApiResource {
  "@type": "Classement";
  matricule: string;
  anacad: string;
  rang: number;
}
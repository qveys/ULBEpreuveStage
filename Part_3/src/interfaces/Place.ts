import {ApiResource} from "@/interfaces/ApiResource";

export interface Place extends ApiResource {
  "@type": "Place";    
  "hopital": number;
  "service": number;
  "places": number;
}
import { TypePreference } from "@/enums/TypePreference";
import {ApiResource} from "@/interfaces/ApiResource";

export interface Preference extends ApiResource {
  matricule: string;
  hopital: number;
  service: number;
  ordre: number;
  typepref: TypePreference.PREFERENCE | TypePreference.EXCLUSION;
}
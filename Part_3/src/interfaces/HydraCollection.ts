interface HydraCollection<T> {
  "@context": string;
  "@id": string;
  "@type": "hydra:Collection";
  "hydra:totalItems": number;
  "hydra:member": T[];
  "hydra:view"?: HydraView;
}
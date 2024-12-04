/**
 * Represents an API resource with essential identifiers.
 * 
 * @property {string} "@id" - The unique identifier for the resource in URI format.
 * @property {string} "@type" - The type of the resource.
 * @property {number} id - The numeric ID of the resource.
 */
export interface ApiResource {
  "@id": string;
  "@type": string;
  id: number;
}
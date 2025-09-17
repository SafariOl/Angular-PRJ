export interface Photo {
  id: number;
  title: string;
  category: string;
  description: string;
  price?: number;
  imageUrl: string;
  createdAt: Date;
}
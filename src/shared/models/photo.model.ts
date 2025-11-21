export interface Photo {
  id: string;
  title: string;
  category: string;
  description: string;
  price?: number;
  imageUrl: string;
  createdAt: Date;
}


interface UserProfile {
  id: string;
  userId: string;
  bio: string;
  age: number;
  lastDonationDate: string; // You can use Date type if you parse it to a Date object
  createdAt: string; // You can use Date type if you parse it to a Date object
  updatedAt: string; // You can use Date type if you parse it to a Date object
}

interface IUser {
  id: string;
  name: string;
  email: string;
  bloodType: string;
  location: string;
  availability: boolean;
  createdAt: string; // You can use Date type if you parse it to a Date object
  updatedAt: string; // You can use Date type if you parse it to a Date object
  userProfile: UserProfile;
}

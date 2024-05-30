interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  bloodType: string;
  location: string;
  role: string;
  availability: boolean;
  activeStatus: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IBloodPost {
  id: string;
  requesterId: string;
  numberOfBags: number;
  phoneNumber: string;
  dateOfDonation: string;
  hospitalName: string;
  hospitalLocation: string;
  hospitalAddress: string;
  reason: string;
  requestStatus: string;
  isManaged: boolean;
  alternativePhoneNumber: string | null;
  timeOfDonation: string | null;
  createdAt: string;
  updatedAt: string;
  requester: IUser;
  acceptedDonors: IBloodPostDonor[];
}

interface IBloodPostDonor {
  id: string;
  bloodPostId: string;
  donorId: string;
  createdAt: string;
  updatedAt: string;
  donor: IUser;
}

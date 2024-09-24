type FAQuestion = {
  question: string;
  answer: string;
};

type LoginFormData = {
  username: string;
  password: string;
};

type NavItem = {
  label: string;
  path: string;
};

type Reservation = {
  category: string;
  country: string;
  description: string;
  endDate: Date;
  id?: string;
  price: number;
  priceCurrency: string | null; // This is coming up null in testing, but we should nail this down to be something
  provider: string;
  startDate: Date;
  status: string;
  title: string;
  town: string;
  transportationType: string;
};

type ReservationReducerGroup = {
  [title: string]: Reservation[];
};

type ReservationTotalsReducerTotal = {
  [title: string]: number;
};

type ReservationFormData = {
  startDate: Date;
  title: string;
  description: string;
  category: string;
  transportationType: string;
  provider: string;
  status: string;
  price: number;
  priceCurrency: string;
};

type ReservationUpdateFormProps = {
  reservation: ReservationFormData;
  setReservation: React.SetStateAction<ReservationFormData>;
};

type SignupFormData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

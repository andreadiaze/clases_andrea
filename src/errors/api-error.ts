interface ApiErrorProps {
  message: string;
  status: number;
}

export class ApiError extends Error {
  readonly status: number;

  constructor({ message, status }: ApiErrorProps) {
    super(message);
    this.status = status;
  }
}

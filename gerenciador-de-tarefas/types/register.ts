export type RegisterProps = {
    Back: () => void;
    Register: (name: string, email: string, token: string) => void;
  }
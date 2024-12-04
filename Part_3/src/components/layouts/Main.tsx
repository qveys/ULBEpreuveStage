import {Children} from "@/interfaces/Children";
// This file contains the Main layout component.
// It accepts children components rendered inside a styled <main> wrapper.
export const Main = ({ children }: Children) => {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 min-h-[calc(100vh-184px)]">
      {children}
    </main>
  );
};

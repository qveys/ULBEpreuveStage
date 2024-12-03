/**
 * Error component: Used to display error messages within the application.
 * 
 * @param {Error} error - The error object containing error details.
 */
export function Error(error: Error) {
  return (
    <div className="flex items-center justify-center">
      <div className="text-red-500">{error.message}</div>
    </div>
  );
}

export default function Error({ title, message, children}) {
    return (
      <div  className="modal-dialog">
        <h2>{title}</h2>
        <p>{message}</p>
        {children}
      </div>
    );
  }
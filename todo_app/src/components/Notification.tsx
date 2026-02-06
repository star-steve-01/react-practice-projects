type NotificationProps = {
  message: string
}

function Notification({ message } : NotificationProps) {
  return(
    <>
      <div className="toast show">
        <div className="toast-header">
          <strong className="me-auto">Status</strong>
          <small>Just now</small>
          <button type="button" className="btn-close" aria-label="Close" />
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </>
  );
}

export default Notification;
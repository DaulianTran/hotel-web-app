function DialogFooter({ children }) {
  return (
    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
      {children}
    </div>
  );
}

export default DialogFooter;

function DialogHeader({ children }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-solid rounded-t border-blueGray-200">
      {children}
    </div>
  );
}

export default DialogHeader;

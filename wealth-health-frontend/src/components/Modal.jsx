import useTheme from "../utils/Theme";

const Modal = () => {
  const { backgroundTheme, contentTheme } = useTheme();
  return (
    <div className={`modal-new-employee ${backgroundTheme} ${contentTheme}`}>
      <span>New employee is added in the list</span>
    </div>
  );
};

export default Modal;

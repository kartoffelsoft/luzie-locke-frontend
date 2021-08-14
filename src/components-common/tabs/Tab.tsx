import styles from './Tab.module.scss';

interface Props {
  label: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Tab: React.FC<Props> = ({ label, active, onClick }) => {
  return (
    <div
      className={`${styles.container} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Tab;

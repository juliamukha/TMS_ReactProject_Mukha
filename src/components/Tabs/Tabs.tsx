import './Tabs.scss';

interface ITabs {
  tabsClass: string,
  children?: string
}


export default function Tabs({ children, tabsClass }: ITabs) {
  return (
    <>
      <li className={tabsClass}>{children}</li>
    </>
  );
}

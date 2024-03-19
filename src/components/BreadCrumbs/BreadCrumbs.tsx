import './BreadCrumbs.scss';

interface IBreadcrumbs {
  breadcrumbsClass: string,
  children?: string
}


export default function BreadCrumbs({ children, breadcrumbsClass }: IBreadcrumbs) {
  return (
    <>
      <div className='breadcrumbs'>
        <a href="#" className={breadcrumbsClass}>{children}</a>
      </div>
    </>
  );
}

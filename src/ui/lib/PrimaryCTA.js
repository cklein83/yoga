
export default function PrimaryCTA({ name, href, timifyAccountId, onClickOverride }) {

  const onClickDefault = (e) => { if (timifyAccountId) e.preventDefault() }
  const onClick = onClickOverride ? onClickOverride : onClickDefault;

  return (
    <a href={timifyAccountId ? "" : href} onClick={onClick} target={href.startsWith("#") ? "_self" : "_blank"} className={`${timifyAccountId ? "timify-button" : ""} 
            inline-flex items-center justify-center w-full lg:w-1/2
            px-5 py-3 mr-3 text-base font-medium text-center text-slate-50 
            rounded-lg bg-amber-600 hover:bg-amber-700 focus:ring-0`} data-account-id={timifyAccountId}>
      {name}
      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </a>
  )
}
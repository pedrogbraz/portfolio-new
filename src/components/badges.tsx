type BadgesProps = {
  text: string,
}

const Badges = ({text}: BadgesProps) => {
  return ( 
    <div className="bg-[--color-theme-opacity] inline-flex px-3 py-1 rounded-[8px]">
      <span className="text-[--color-theme]">{text}</span>
    </div>
   );
}
 
export default Badges;
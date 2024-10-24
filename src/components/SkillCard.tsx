import { Avatar } from "@mantine/core";

const SkillBadge=(skills: []) => {
    return skills.map((skill: any, index: number) => <div key={index} className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3" >
        <Avatar className="!w-[24px] !p-1" variant="transparent" radius="xs" src={`/Icons/${skill}.png`} />
        <div className="text-textColor text-xl font-medium" >{skill}</div>
    </div>)
}

const SkillCard=(props: any) => {
    return <div className="w-[49%] shadow-[0_0_10px_0_#64FFDA50] rounded-2xl border border-primaryColor p-5" >
        <div className="text-3xl mb-4 text-white text-center font-bold" >{props.title}</div>

        <div className="flex gap-3 justify-center flex-wrap" >
            {SkillBadge(props.skills)}
        </div>
    </div>
}
export default SkillCard;
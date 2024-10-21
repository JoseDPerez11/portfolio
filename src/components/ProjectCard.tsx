import { Badge, Button, Card, Group, Image, Indicator, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./FullProjectModal";

const ProjectCard=(props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    return <><Card onClick={open} className="!bg-bgColor cursor-pointer translation-transform duration-300 ease-in-out hover:!scale-[1.03] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA] !border-primaryColor border-2" w="360px" shadow="lg" padding="sm" radius="lg" withBorder >
            <Card.Section className="p-3" >
                <Image
                    className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]"
                  //src={props.image}
                  //alt={props.image}
                 />
            </Card.Section>

            <Group justify="space-between" mt="xs" mb="xs" >
                <div className="!text-2xl gap-2 !font-bold !text-white flex items-center sm-mx:!text-xl" >{props.title}{props.live === true && <Badge className="!px-1" variant="outline" color="red" rightSection={<Indicator className="!mr-0.5 !z-0" color="red" position="middle-end" size={7} processing></Indicator>} >Live</Badge>}</div>
            </Group>

            <Group mt="xs" mb="sm" >
                {props.technologies.map((tech: string, index: number) => index < 3 && <Badge key={index} size="lg" variant="light" color="#64FFDA">{tech}</Badge>)}
            </Group>

            <Text className="!text-justify" lineClamp={5} size="sm" c="dimmed" >
                {props.desc}
            </Text>

            <Button onClick={open} className="!bg-primaryColor !text-bgColor" fullWidth mt="md" radius="md" >
                show more
            </Button>
        </Card>

        <FullProjectModal opened={opened} close={close} title={props.title} desc={props.desc} image={props.image} live={props.live} link={props.link} github={props.github} technologies={props.technologies} />

        </>
}
export default ProjectCard;
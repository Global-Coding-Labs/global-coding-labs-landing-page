import styled from 'styled-components';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container, Button, Headline5 } from "../../styles/Components";

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    projectIdea: yup.string().required()
});

export default function ProjectRequest() {
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function submitIdea(data: { name: string, email: string, projectIdea: string }) {
        console.log(data);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(submitIdea)}>
                <Group>
                    <Headline5>Name & Company</Headline5>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue={""}
                        rules={{ required: true }}
                        render={({ field }) => <Input {...field} />}
                    />
                </Group>

                <Group>
                    <Headline5>Email</Headline5>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue={""}
                        rules={{ required: true }}
                        render={({ field }) => <Input {...field} />}
                    />
                </Group>

                <Group>
                    <Headline5>Project Idea</Headline5>
                
                    <Controller
                        name="name"
                        control={control}
                        defaultValue={""}
                        rules={{ required: true }}
                        render={({ field }) => <TextArea {...field} />}
                    />
                </Group>

                <Button>Submit</Button>
            </Form>
        </Container>
    );
}

const Input = styled.input`
    width: 100%;
    height: 2.5em;
    font-size: 1.25rem;
    padding: 0 .5em;
    border: none;
    box-shadow: 3px 2px 15px rgba(0, 0, 0, 0.15);
    margin-top: 10px;

    &::placeholder {
        color: #bdbdbd;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 7.5em;
    font-size: 1.25rem;
    padding: .5em .5em;
    border: none;
    box-shadow: 3px 2px 15px rgba(0, 0, 0, 0.15);
    margin-top: 10px;


    &::placeholder {
        color: #bdbdbd;
    }
`;

const Group = styled.div`
    margin-top: 1.5em;
`;

const Form = styled.form`
    button {
        margin-top: 2em;
    }
`;
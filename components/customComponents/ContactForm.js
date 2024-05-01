'use client'
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import React, {useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Mail} from "lucide-react"
import {toast} from "sonner"


const ContactForm = () => {
        const [to, setTo] = useState('');
        const [subject, setSubject] = useState('');
        const [content, setContent] = useState('');

        const onSubmit = async (e) => {
            e.preventDefault();
            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({to, subject, content}),
                });
                const data = await res.json(); // Parse the JSON response
                if (res.status === 201) {
                    toast.success(data.res.message)
                    cleanForm();
                } else if (res.status === 400) {
                    toast.error(data.res.error)
                } else if (res.status === 500 && data?.res.message) {
                    toast.error(data.res.message)
                } else if (res.status === 500) {
                    toast.error(data.res.error)
                } else {
                    toast.info('Unexpected status code: ', res.status, ' Error: ', data.res.error); // Log the error data
                }
            } catch
                (e) {
                console.error(e);
            }
        }

        const cleanForm = () => {
            setTo('')
            setSubject('')
            setContent('')
        }


        return (
            <div className={'w-full flex justify-center'}>
                <form
                    className={'h-full w-full md:w-3/4 2xl:w-3/5  content-center space-y-3 p-2'}
                    onSubmit={onSubmit}
                >
                    <div className={'flex flex-col lg:flex-row gap-2 justify-start lg:items-center '}>
                        <Label className={'w-[90px] lg:text-right '}>To:</Label>
                        <Input
                            type={'email'} value={to}
                            onChange={(e) => setTo(e.target.value)}
                            placeholder="For some providers, the subject must be an Authorized Recipients."
                            className={'drop-shadow-md'}
                        />
                    </div>
                    <div className={'flex flex-col lg:flex-row gap-2 justify-start lg:items-center '}>
                        <Label className={'w-[90px] lg:text-right '}>Subject:</Label>
                        <Input
                            type={'text'}
                            placeholder="Write your subject here"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className={'drop-shadow-md'}
                        />
                    </div>
                    <div className={'flex flex-col lg:flex-row gap-2 justify-start lg:items-center '}>
                        <Label className={'w-[90px] lg:text-right '}>Message:</Label>
                        <Textarea
                            type={'text'}
                            placeholder="Write your message here"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}

                        />
                    </div>
                    <div className={'flex justify-end'}>
                        <Button
                            type={"submit"}
                            className={'w-full lg:w-auto  '}
                        >
                            <Mail className="mr-2 h-4 w-4"/>
                            Send
                        </Button>
                    </div>
                </form>
            </div>


        );
    }
;

export default ContactForm;
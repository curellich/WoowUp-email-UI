import ContactForm from "@/components/customComponents/ContactForm";
import Image from 'next/image'
import woowUpLogo from '@/public/woowup_logo.png'
import {Label} from "@/components/ui/label";
import {Toaster} from "@/components/ui/sonner";

export default function Home() {

    return (
        <main className="h-full flex flex-col items-center m-3">
            <div className={'flex flex-col items-center mb-5'}>
                <h1 className="text-5xl font-bold text-center mb-5 mt-10">
                    Welcome to
                </h1>
                <div className={'lg:w-1/2'}>
                    <Image
                        src={woowUpLogo}
                        width={'fill'}
                        alt="WoowUp Logo"
                    />
                </div>
            </div>
            <Label className={'text-2xl font-extralight'}>Email service Challenge</Label>

            <div className={'h-full w-full flex justify-center'}>
                <ContactForm/>
            </div>
        </main>
    );
}

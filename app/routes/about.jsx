import { Form, useActionData, useNavigation } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import Heading from "../components/Heading";
import Objective from "../components/Objective";
import Input from "../components/Input";
import { useRef } from "react";
import { badRequest, trimPhone, validateEmail, validateMessage, validateName, validatePhone } from "../utils";

export function meta() {
    return [
        { title: 'About | Autofibre Solutions Ltd' }
    ];
}

export async function action({ request }) {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const trimmedPhone = trimPhone(phone);

    const fieldErrors = {
        name: validateName(name),
        email: validateEmail(email),
        phone: validatePhone(trimmedPhone),
        message: validateMessage(message)
    };

    if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({ fieldErrors });
    }

    return redirect('/success');
}

export default function About() {
    return (
        <main>
            <AboutUs />
            <MissionAndVision />
            <Objectives />
            <CoreValues />
            <Contact />
        </main>
    );
}

function AboutUs() {
    return (
        <section className="w-4/5 xl:max-w-6xl mx-auto">
            <h1 className="font-semibold text-3xl lg:text-5xl lg:text-center mt-40">About Autofibre Solutions Ltd</h1>
            <p className="lg:text-center mt-6 lg:mt-8 opacity-90">
                Autofibre Solutions Limited is an established local company founded with the principle objectives of providing goods and services to other businesses and organizations. The business has gotten its strength from the professional approach we use to conduct our dealings. Backed by experienced qualified staff in all areas of operation, we always strive to deliver quality goods and services at highly competitive rates.
            </p>
            <div className="mt-10 lg:mt-12 bg-[url('/diary.jpg')] bg-center bg-contain bg-no-repeat aspect-video max-w-md mx-auto" />
        </section>
    );
}

function MissionAndVision() {
    return (
        <section className="w-4/5 xl:max-w-6xl mx-auto mt-16 lg:mt-24">
            <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-12 lg:items-center">
                <div>
                    {/* <Heading text='Mission' align='left' /> */}
                    <h2 className="font-semibold text-2xl lg:text-4xl text-left lg:text-center">Mission</h2>
                    <p className="lg:text-center mt-4 text-lg lg:mt-6 opacity-90 lg:px-8">
                        To become a regional brand in commodities and service delivery and be recognized for a customer-centric focus.
                    </p>
                    {/* <Heading text='Vision' align='left' /> */}
                    <h2 className="mt-8 font-semibold text-2xl lg:text-4xl text-left lg:text-center">Vision</h2>
                    <p className="lg:text-center mt-4 text-lg lg:mt-6 opacity-90 lg:px-8">
                        To competitively offer a reliable service to our customers, with an assurance of delivery of the desired results.
                    </p>
                </div>
                <div className="max-w-md lg:h-[400px] aspect-video lg:aspect-square bg-[url('/mission.svg')] bg-center bg-contain bg-no-repeat" />
            </div>
        </section>
    );
}

function Objectives() {
    const objectives = [
        'To render quality services.',
        'To inculcate behavioral and professional values as a culture of staff routine practices.',
        'To broaden business activities in a bid to ingrain the economies of scale.',
        'To create employment opportunities especially for women and youth.',
        'To take services to remote locations.',
        'To contribute towards susteinable development both locally and internationally.'
    ];

    return (
        <section className="w-4/5 xl:max-w-6xl mx-auto mt-16 lg:mt-24 pb-20">
            <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-16 lg:items-center">
                <div className="lg:order-2">
                    <h2 className="font-semibold text-2xl lg:text-4xl text-left lg:text-center">Objectives</h2>
                    <ul className="lg:max-w-lg mt-4 lg:mt-6 list-disc lg:px-8">
                        {objectives.map((objective, index) => (
                            <Objective text={objective} key={index} />
                        ))}
                    </ul>
                </div>
                <div className="lg:order-1 max-w-md lg:h-[400px] aspect-video lg:aspect-square bg-[url('/objectives.svg')] bg-center bg-contain bg-no-repeat" />
            </div>

        </section>
    );
}

function CoreValues() {
    const coreValues = [
        {
            name: 'Integrity',
            description: 'Committed to say what we mean, deliver what we promote and stand for what is right.'
        },
        {
            name: 'Excellence',
            description: 'Committed to continually improve our value proposition to our clients through our own time policy.'
        },
        {
            name: 'Reliability',
            description: 'Business partner committed to excellence and exceeding our customers’ expectations.'
        },
        {
            name: 'Growth',
            description: 'To facilitate growth of both the client and horizon as a whole.'
        }
    ];

    return (
        <section className="w-full bg-brand-yellow py-20">
            <div className="w-4/5 xl:max-w-6xl mx-auto">
                <h2 className="font-semibold text-2xl lg:text-4xl text-left lg:text-center">Core values</h2>
                <ul className="list-disc lg:max-w-xl mx-auto mt-4 lg:mt-6">
                    {coreValues.map((value, index) => (
                        <li key={index} className="text-lg text-gray-800"><span className="font-semibold">{value.name}:</span> {value.description}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function Contact() {
    const actionData = useActionData();

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <section className="w-4/5 xl:max-w-6xl mx-auto mt-20 lg:mt-24" id="contact">
            <Heading text="Let's hear from you" />
            <Form method="post" className="mt-4 max-w-md mx-auto">
                <fieldset>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Input
                            ref={nameRef}
                            type='text'
                            name='name'
                            id='name'
                            placeholder='John Doe'
                            fieldError={actionData?.fieldErrors.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input
                            ref={emailRef}
                            type='email'
                            name='email'
                            id='email'
                            placeholder='johndoe@gmail.com'
                            fieldError={actionData?.fieldErrors.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <Input
                            ref={phoneRef}
                            type='text'
                            name='phone'
                            id='phone'
                            placeholder='0712 345 678'
                            fieldError={actionData?.fieldErrors.phone}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <Input
                            ref={messageRef}
                            type='textarea'
                            name='message'
                            id='message'
                            placeholder='Type here'
                            fieldError={actionData?.fieldErrors.message}
                        />
                    </div>
                    <button type="submit" className="bg-brand-yellow px-6 py-3 text-center rounded">
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </fieldset>
            </Form>
        </section>
    );
}
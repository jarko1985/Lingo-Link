"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().optional(),
    ageRange: z.string().min(1, "Please select an age range."),
    level: z.enum(["Beginner", "Intermediate", "Advanced"]),
    reason: z.string().min(1, "Please provide a reason."),
    focus: z.string().optional(),
    proficiency: z.string().min(1, "Please specify your desired proficiency."),
    timeCommitment: z.string().min(1, "Please specify your time commitment."),
    preferredFormat: z.enum(["Text-based", "Audio", "Video", "Interactive"]),
    practicePreference: z.enum(["Yes", "No"]),
});

type FormValues = z.infer<typeof formSchema>;

const questions = [
    { name: "name", label: "What is your name?", description: "(Optional for a personalized experience)", type: "text" },
    { name: "ageRange", label: "What is your age range?", type: "radio", options: ["Under 18", "18-25", "26-40", "41+"] },
    { name: "level", label: "Can you describe your current level?", type: "radio", options: ["Beginner", "Intermediate", "Advanced"] },
    { name: "reason", label: "Why do you want to learn the language?", type: "text" },
    { name: "focus", label: "Are there specific skills you'd like to focus on?", type: "text" },
    { name: "proficiency", label: "What is your desired level of proficiency?", type: "text" },
    { name: "timeCommitment", label: "How much time can you dedicate to learning per day or week?", type: "text" },
    { name: "preferredFormat", label: "Do you prefer text-based, audio, video, or interactive lessons?", type: "radio", options: ["Text-based", "Audio", "Video", "Interactive"] },
    { name: "practicePreference", label: "Are you comfortable practicing with other learners or AI chat partners?", type: "radio", options: ["Yes", "No"] },
];

export function MultiStepForm() {
    const [step, setStep] = useState(0);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
    const [animationState, setAnimationState] = useState('enter');
    const [direction, setDirection] = useState('right');

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            ageRange: "",
            level: "Beginner",
            reason: "",
            focus: "",
            proficiency: "",
            timeCommitment: "",
            preferredFormat: "Text-based",
            practicePreference: "Yes",
        },
    });

    const nextStep = () => {
        setDirection('right');
        setAnimationState('exit');
        setTimeout(() => {
            if (step < questions.length - 1) {
                setStep((prev) => prev + 1);
            }
        }, 300);
    };

    const prevStep = () => {
        setDirection('left');
        setAnimationState('exit');
        setTimeout(() => {
            if (step > 0) {
                setStep((prev) => prev - 1);
            }
        }, 300);
    };

    const restartForm = () => {
        setStep(0);
        setSubmittedData(null);
        form.reset();
    };

    const onSubmit: SubmitHandler<FormValues> = (values) => {
        setSubmittedData(values);
    };

    if (submittedData) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-xl md:text-2xl font-bold text-center mb-6">
                    Thank you for your responses! Our AI is now processing your information and tailoring a personalized learning experience based on your preferences and goals.
                </div>

                <Table className="w-full max-w-3xl mx-auto text-lg md:text-2xl">
                    {/* <TableCaption className="text-xl md:text-3xl">Your responses</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left">Question</TableHead>
                            <TableHead className="text-left">Answer</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Object.entries(submittedData).map(([key, value]) => (
                            <TableRow key={key}>
                                <TableCell className="font-medium text-lg md:text-2xl">{questions.find(q => q.name === key)?.label || key}</TableCell>
                                <TableCell className="text-lg md:text-2xl">{value || ''}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Button onClick={restartForm} className="h-auto w-auto mt-6 text-2xl md:text-4xl px-8 py-4">
                    Start Over
                </Button>
            </div>
        );
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center h-screen space-y-10 p-4 md:p-16">
                <div
                    className={`w-full max-w-2xl transition-all duration-500 ease-in-out ${direction === 'left' ? animationState === 'enter' ? 'fade-in-0 animate-in slide-in-from-left-[200%]' : 'animate-out fade-out-0 slide-out-to-right-[200%]' : animationState === 'enter' ? 'fade-in-0 animate-in slide-in-from-right-[200%]' : 'animate-out slide-out-to-left-[200%] fade-out-0'}`}
                    onAnimationEnd={() => {
                        if (animationState === 'exit') {
                            setAnimationState('enter');
                        }
                    }}
                >
                    <FormField
                        control={form.control}
                        name={questions[step].name as keyof FormValues}  // Typecast here to match the schema
                        render={({ field }) => (
                            <FormItem className="w-full text-center space-y-10">
                                <FormLabel className="text-3xl md:text-5xl font-bold">{questions[step].label}</FormLabel>
                                {questions[step].description && <FormDescription className="text-xl md:text-3xl">{questions[step].description}</FormDescription>}
                                <FormControl>
                                    {questions[step].type === "text" ? (
                                        <Input
                                            {...field}
                                            value={form.watch(questions[step].name as keyof typeof formSchema.shape) || ""}
                                            className="h-auto w-full text-center text-2xl md:text-4xl p-6"
                                        />

                                    ) : (
                                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-4 text-2xl md:text-4xl">
                                            {questions[step].options?.map((option) => (
                                                <FormItem key={option} className="flex items-center space-x-4">
                                                    <FormControl>
                                                        <RadioGroupItem value={option} />
                                                    </FormControl>
                                                    <FormLabel className="font-normal text-2xl md:text-4xl">{option}</FormLabel>
                                                </FormItem>
                                            ))}
                                        </RadioGroup>
                                    )}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex gap-6">
                    {step > 0 && <Button type="button" onClick={prevStep} className="h-auto w-auto text-2xl md:text-4xl px-8 py-4">Back</Button>}
                    {step < questions.length - 1 ? (
                        <Button type="button" onClick={nextStep} className="h-auto w-auto text-2xl md:text-4xl px-8 py-4">Next</Button>
                    ) : (
                        <Button type="submit" className="h-auto w-auto text-2xl md:text-4xl px-8 py-4">Submit</Button>
                    )}
                </div>
            </form>
        </Form>
    );
}

export default MultiStepForm;

"use client"
import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import {
    z
} from "zod"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
const formSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1)
});

import useProfileStore from "@/store/profile"
import { useRouter } from "next/navigation"
import { authenticate } from "./actions"
import { signIn } from "next-auth/react"

export default function LoginForm() {
    const router = useRouter()
    const setUsename  = useProfileStore( (state) =>  state.setUsename)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "emilys",
            password: "emilyspass"
        }
    })


    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {   
            await signIn('credentials', { username: values.username, password: values.password, redirect: false})

            // const result = await authenticate(values.username, values.password);
            // console.log(result)
            // console.log(values);
            setUsename(values.username)
            router.replace("/game")
            toast.success("success")
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="username"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="password"

                                    type=""
                                    {...field} />
                            </FormControl>
                            <FormDescription>This is your password to login</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
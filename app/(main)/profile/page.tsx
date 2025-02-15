import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import ProfileForm from "./ProfileForm";

const ProfilePage = async () => {

    return <section className={cn("flex justify-center items-center min-h-[100vh] overflow-hidden")}>
        <Suspense>
            <ProfileForm></ProfileForm>
        </Suspense>
    </section>
}

export default ProfilePage;
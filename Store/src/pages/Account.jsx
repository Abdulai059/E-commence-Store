import UpdatePasswordForm from "../components/auth/UpdatePasswordForm";
import UpdateUserDataForm from "../components/auth/UpdateUserDataForm";

function Account() {
    return (
        <div className="md:mt-40  px-2">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center space-y-3">
                    <h1 className="md:text-3xl text-2xl text-gray-800  font-semibold  ">
                        Account Settings
                    </h1>
                    <p className="text-gray-600 px-4 text-base">Manage your profile and security settings</p>
                </div>

                {/* User Data Section */}
                <div className="space-y-10">

                    <UpdateUserDataForm />
                    <UpdatePasswordForm />
                </div>


            </div>
        </div>
    );
}

export default Account;
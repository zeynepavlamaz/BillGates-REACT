import "./Profile.style.css";

function Profile() {
    return (
        <>
            <div className="profile-container">
                <img
                    className="bill-gates-image"
                    src="src\assets\billgates.jpg"
                    alt="Bill Gates"
                />
                <h2>Spend Bill Gates' Money</h2>
            </div>
        </>
    );
}

export default Profile;

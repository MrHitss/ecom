import React from "react";

const Dashboard = () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
            </div>
            <div className="row">
                <div className="col-3">
                    <div class="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                        <div class="card-body">
                            <h5 class="card-title">0 Orders</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
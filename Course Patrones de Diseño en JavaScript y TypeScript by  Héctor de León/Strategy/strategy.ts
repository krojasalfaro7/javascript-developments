interface Strategy {
    login(user: string, pass: string): boolean;
}

class AuthContext {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, pass: string) {
        return this.strategy.login(user, pass);
    }
}

class LoginDBStrategy implements Strategy {
    login(user: string, pass: string): boolean {
        console.log("Login hacia la DB");
        if (user === "admin" && pass === "admindb"){
            return true;
        }
        return false;
    }
}

class LoginServiceStrategy implements Strategy {
    login(user: string, pass: string): boolean {
        console.log("Login hacia la Services");
        if (user === "admin" && pass === "adminservice"){
            return true;
        }
        return false;
    }
}


const auth = new AuthContext(new LoginDBStrategy());
auth.login("admin", "admindb");

auth.setStrategy(new LoginServiceStrategy())
auth.login("admin", "adminservice");
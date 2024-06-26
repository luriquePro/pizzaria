import { STATUS } from "../constants/STATUS";

interface IAppConfigures {
	config: string;
	value: string | number | boolean;
	status: STATUS;
}

export { IAppConfigures };

interface IAppConfigureRepository {
	getConfig(config: string): Promise<boolean | string | number>;
}
export { IAppConfigureRepository };

import { BadRequestError } from "../helpers/ApiErrors";
import { ICategoryCreateRepository, ICategoryRepository, ICategoryServices, ICategoryValidator } from "../interfaces/CategoryInterfaces";

class CategoryServices implements ICategoryServices {
	constructor(
		private readonly categoryValidator: ICategoryValidator,
		private readonly categoryRepository: ICategoryRepository,
	) {}
	public async create(dataCreate: ICategoryCreateRepository): Promise<string> {
		this.categoryValidator.create(dataCreate);

		const categoryExists = await this.categoryRepository.findOneByObj({ name: dataCreate.name });
		if (categoryExists) {
			throw new BadRequestError("Category is already exists.");
		}

		await this.categoryRepository.create(dataCreate);
		return "Category successfully registered.";
	}
}

export { CategoryServices };

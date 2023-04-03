import { Request } from "express";
import { AlbumController } from "../controller/AlbumController";
import { data } from "../data";
import { Album } from "../interface/Album";
import { makeMockResponse } from "../mock/mockResponse";

describe("album controller tests", () => {
	const albumCtrl = new AlbumController();
	// os mocks representam objetos; em cenários de testes, é aceitável utilizá-los para não criar objetos imensos como os da Request e Response
	const mockRequest = {} as Request;
	const mockResponse = makeMockResponse();
	it("Deve retornar todos os álbuns", () => {
		albumCtrl.index(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(200);
		expect(mockResponse.state.json).toHaveLength(data.length);
	});
	it("Deve criar um novo álbum", () => {
		mockRequest.body = {
			id: 1,
			title: "anything like me",
			composer: "poppy",
			image: "https://blablabla"
		} as Album;
		albumCtrl.insertAlbum(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(201);
		expect(mockResponse.state.json).toMatchObject({
			message: "new album was just added to our database!"
		});
	});

	it("Não deve criar novo álbum com um nome inválido", () => {
		mockRequest.body = {
			id: "1",
			title: ""
		};
		albumCtrl.insertAlbum(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(403);
		expect(mockResponse.state.json).toMatchObject({ message: `insert the album's name!` });
	});
	it("Não deve criar novo álbum com ID inválido", () => {
		mockRequest.body = {
			id: "#sdas",
			title: "bloodmoney",
			image: "https://outofsight"
		};
		albumCtrl.insertAlbum(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(403);
		expect(mockResponse.state.json).toMatchObject({ message: `invalid ID!` });
	});

	it("Deve atualizar dados de um álbum", () => {
		mockRequest.body = {
			id: "1",
			title: "1x1 feat Nova Twins",
			composer: "bring me the horizon",
			image: "https://rightwhereyouleftme"
		};
		albumCtrl.updateAlbum(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(201);
		expect(mockResponse.state.json).toMatchObject({ message: "album updated!" });
	});
});

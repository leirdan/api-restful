import { json, Request, Response } from "express";
import { SongController } from "../controller/SongController";
import { Song } from "../interface/Song";
import { data } from "../data";
import { makeMockResponse } from "../mock/mockResponse";

describe("songs controller tests", () => {
	const songCtrl = new SongController();
	// os mocks representam objetos; em cenários de testes, é aceitável utilizá-los para não criar objetos imensos como os da Request e Response
	const mockRequest = {} as Request;
	const mockResponse = makeMockResponse();
	it("deve retornar todas as musicas", () => {
		songCtrl.index(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(200);
		expect(mockResponse.state.json).toHaveLength(data.length);
	});
	it("deve criar uma nova música", () => {
		mockRequest.body = {
			id: "1",
			title: "anything like me",
			duration: "3:19",
			genre: "metal",
			composer: "poppy"
		} as Song;
		songCtrl.insertSong(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(201);
		expect(mockResponse.state.json).toMatchObject({
			message: "new song was just added to our database!"
		});
	});

	it("não deve criar nova música com um nome inválido", () => {
		mockRequest.body = {
			id: "1",
			title: ""
		};
		songCtrl.insertSong(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(403);
		expect(mockResponse.state.json).toMatchObject({ message: `insert the song's name!` });
	});
	it("não deve criar nova música com ID inválido", () => {
		mockRequest.body = {
			id: "#sdas",
			title: "bloodmoney"
		};
		songCtrl.insertSong(mockRequest, mockResponse);
		expect(mockResponse.state.status).toBe(403);
		expect(mockResponse.state.json).toMatchObject({ message: `invalid ID!` });
	});
});

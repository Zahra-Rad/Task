import { create } from 'zustand';

const useData = create((set) => ({
    data: [
        {
            type: "folder",
            name: "public",
            editing: false,
            deleted: false,
            children: [
                {
                    type: "file",
                    name: "index.html",
                    editing: false,
                    deleted: false,
                },
                {
                    type: "file",
                    name: "manifest.json",
                    editing: false,
                    deleted: false,
                },
            ],
        },
        {
            type: "folder",
            name: "src",
            editing: false,
            deleted: false,
            children: [
                {
                    type: "file",
                    name: "index.js",
                    editing: false,
                    deleted: false,
                },
                {
                    type: "file",
                    name: "App.js",
                    editing: false,
                    deleted: false,
                },
                {
                    type: "file",
                    name: "index.css",
                    editing: false,
                    deleted: false,
                },
                {
                    type: "file",
                    name: "App.css",
                    editing: false,
                    deleted: false,
                },
                {
                    type: "folder",
                    name: "components",
                    editing: false,
                    deleted: false,
                    children: [
                        {
                            type: "file",
                            name: "index.js",
                            editing: false,
                            deleted: false,
                        },
                        {
                            type: "file",
                            name: "index.js",
                            editing: false,
                            deleted: false,
                        },
                        {
                            type: "file",
                            name: "index.js",
                            editing: false,
                            deleted: false,
                        },
                    ],
                },
            ],
        },
        {
            type: "file",
            name: "package.json",
            editing: false,
            deleted: false,
        },
        {
            type: "file",
            name: "package-lock.json",
            editing: false,
            deleted: false,
        },
        {
            type: "file",
            name: "tailwind.config.js",
            editing: false,
            deleted: false,
        },
    ],
    updateData: (newData) => {
        set({ data: newData });
    },
}));

export default useData;
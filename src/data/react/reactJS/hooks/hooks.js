import { useCallback } from "./useCallback/useCallback";
import { useContext } from "./useContext/useContext";
import { useEffect } from "./useEffect/useEffect";
import { useMemo } from "./useMemo/useMemo";
import { useReducer } from "./useReducer/useReducer";
import { useRef } from "./useRef/useRef";
import { useState } from "./useState/useState";

export const hooks = {
    id: 517,
    title: "Hooks / Хуки",
    children: [
        useState,
        useEffect,
        useReducer,
        useRef,
        useContext,
        useMemo,
        useCallback,
    ]
}
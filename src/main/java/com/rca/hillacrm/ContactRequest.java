package com.rca.hillacrm;

public record ContactRequest(
        String name,
        String email,
        String phone
) {
}
